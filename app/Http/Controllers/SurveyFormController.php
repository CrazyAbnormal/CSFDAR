<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use App\Models\CSFForm;
use App\Models\Customer;
use App\Models\Dimension;
use App\Models\CcQuestion;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Log;

use App\Models\CustomerComment;
use App\Models\CustomerCCRating;
use Mews\Captcha\Facades\Captcha;
use Illuminate\Support\Facades\DB;
use App\Models\ShowDateCsfForm;
use App\Models\CustomerAttributeRating;
use Illuminate\Support\Facades\Session;
use App\Http\Requests\SurveyFormRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use App\Models\CustomerRecommendationRating;
use App\Models\CustomerOtherAttributeIndication;

use App\Http\Resources\ShowDateCSFForm as ShowDateCSFFormResource;
use App\Models\Divisions;
use App\Models\Services;
use App\Models\Sections;

// use App\Models\CustomerSignature;

class SurveyFormController extends Controller
{

    // to render a view with data fetched from the database
    public function index(Request $request)
    {
        // get the data if the date will be displayed or not
        $date_display = ShowDateCsfForm::all(); // retrieves all records from the ShowDateCsfForm model/table in the database

        $cc_questions = CcQuestion::all(); // retrieves all records from the CcQuestion model/table
        $dimensions = Dimension::all(); // retrieves all records from the Dimension model/table
        $services = Services::all(); // retrieves all records from the Services model/table
        

        return Inertia::render('Survey-Forms/Index')
            ->with('cc_questions', $cc_questions)
            ->with('dimensions', $dimensions)
            ->with('services', $services)
            ->with('date_display', $date_display);  
    }


 
    // SurveyFormRequest
    public function store(SurveyFormRequest $request)
    {       
        //dd($request->all());
        try{
            DB::beginTransaction();    
           
            //Save Customer
            $customer = $this->saveCustomer($request);

            // Validate dimension_form data
            $dimensionData = request()->validate([
                'dimension_form.id.*' => ['required', 'exists:dimensions,id'],
                'dimension_form.rate_score.*' => ['required', 'max:1'],
                'dimension_form.importance_rate_score.*' => ['required', 'max:1'],
            ]);
    
            // Associate ratings with dimensions for the customer
            foreach ($dimensionData['dimension_form']['id'] as $index => $dimensionId) {
                CustomerAttributeRating::create([
                    'created_at' =>  $request->date,
                    'updated_at' =>  $request->date,
                    'customer_id' => $customer->id,
                    'dimension_id' => $dimensionId,
                    'rate_score' => $dimensionData['dimension_form']['rate_score'][$index],
                    'importance_rate_score' => $dimensionData['dimension_form']['importance_rate_score'][$index],
                ]);
            }
    
            // Validate CC
            $ccData = request()->validate([
                'cc_form.id.*' => ['required', 'exists:cc_questions,id'],
                'cc_form.answer.*' => ['required', 'max:1'],
            ]);
    
            // Associate ratings with cc for the customer
            foreach ($ccData['cc_form']['id'] as $index => $ccId) {
                CustomerCCRating::create([
                    'created_at' =>  $request->date,
                    'updated_at' =>  $request->date,
                    'customer_id' => $customer->id,
                    'cc_id' => $ccId,
                    'answer' => $ccData['cc_form']['answer'][$index],
                ]);
            }
    
            // Save Comment
            if($request->comment){
                $this->saveComment($request, $customer);
            }
           
            // Save Customer Recommendation Rating
            $this->saveCustomerRecommendationRating($request, $customer);

            // SAve Other Attributes Indication
            // $this->saveCustomerOtherAttributeIndication($request, $customer);

            // Save csf form
            $this->saveCSFForm($request, $customer);

            DB::commit();
           
            return Inertia::render('Survey-Forms/ThankYou')
                ->with('message', "Successfully Submitted Thank you.")
                ->with('status', "success")
                ->with('current_url', $request->current_url);
            
            return Inertia::redirect('msg_index');

        } catch (\Exception $e) {
            DB::rollBack();
            //return $e;
            $msg = $e->getMessage();
            return back()->with([
                'message' => $msg ,
                'status' => "error",
            ]);

        }

        
   
    }

    public function saveCSFForm($request, $customer)
    {
        $csf_form = new CSFForm();
        $csf_form->customer_id = $customer->id;
        $csf_form->division_id = $request->division_id;
        if($request->section_id != "null"){
            $csf_form->section_id = $request->section_id;
        }
        $csf_form->services_id = $request->services_id;
        $csf_form->client_type = $request->client_type;
        if($request->date){
            $csf_form->created_at = $request->date;
            $csf_form->updated_at = $request->date;
        }
        
        $csf_form->save();

        return $csf_form;
    }

    public function saveCustomer($request){
        $customer = new Customer();
        $customer->email = $request->email;
        $customer->name = $request->name;
        $customer->client_type = $request->client_type;
        $customer->sex = $request->sex;
        $customer->age_group = $request->age_group;
        if($request->date){
            $customer->created_at = $request->date;
            $customer->updated_at = $request->date;
        }
         // 'signature_path' => $request->signature,
        $customer->save();

        return $customer;
    }

    public function saveComment($request, $customer){
         $comment = CustomerComment::create(
            [
                'created_at' => $request->date,
                'updated_at' => $request->date,
                'customer_id' => $customer->id,
                'comment' =>  $request->comment,
                'is_complaint' =>  $request->is_complaint,
            ]
         );
        return $comment;
    }

    public function saveCustomerRecommendationRating($request, $customer){
        $recommentdation_rating = CustomerRecommendationRating::create(
                [
                    'created_at' =>  $request->date,
                    'updated_at' =>  $request->date,
                    'customer_id' => $customer->id,
                    'recommend_rate_score' =>  $request->recommend_rate_score,      
                ]
            );
        return $recommentdation_rating;
    }

    public function saveCustomerOtherAttributeIndication($request, $customer){
        $customer_indication = CustomerOtherAttributeIndication::create(
                [
                    'created_at' =>  $request->date,
                    'updated_at' =>  $request->date,
                    'customer_id' => $customer->id,   
                    'indication' =>  $request->indication,           
                ]
            );
       return $customer_indication;
   }

   // to fetch and display all the contents of the divisions table from the database
    public function divisions_index(Request $request)
    {
        $divisions = Divisions::all();
        return Inertia::render('Divisions')
                        ->with('divisions', $divisions);
    }

    // public function divisions_index(Request $request)
    // {
    //     $divisions = Divisions::select('id', 'name')->get(); // or 'short_name' if that's the column you want
    //     return Inertia::render('Divisions', [
    //         'divisions' => $divisions
    //     ]);
    // 

   // to fetch and display all the contents of the services table from the database
   // Fetches services linked to a specific division
    public function services_index(Request $request, $division_id)
    {
       $divisions = Divisions::findOrFail($division_id);
       
       // Get services directly linked to division
       $services = Services::where('division_id', $division_id)
                         ->whereNull('section_id')
                         ->get();

        return Inertia::render('Services')
                ->with('services', $services)
                ->with('divisions', $divisions)
                ->with('division_id', (int)$division_id);
    }


    public function sections_index($division_id)
    {
        $divisions = Divisions::findOrFail($division_id);
        $sections = Sections::where('division_id', $division_id)->get();
        
        Log::info('Sections found:', ['sections' => $sections]);
        
        return Inertia::render('Sections')
              ->with('sections', $sections)
              ->with('divisions', $divisions)
              ->with('division_id', (int)$division_id);

    }


    //Fetches services linked to a specific section
    public function section_services($section_id)
    {
        Log::info('Section services called with ID:', ['section_id' => $section_id]);
        
        $section = Sections::findOrFail($section_id);
        $divisions = Divisions::findOrFail($section->division_id);
        
        $services = Services::where('section_id', $section_id)->get();
        
        Log::info('Services found:', ['services' => $services]);
        
        return Inertia::render('Services', [
            'services' => $services,
            'divisions' => $divisions,
            'division_id' => (int)$divisions->id,
            'section' => $section
        ]);
    }


   
    // to get the contents of each division from the database. This part checks if the division has a section or if it is null. If sections exists, it will go to the sections page.
    // If the section is null, it checks if the division has services. If it exist it will go to the services page.
    public function getDivisionContent($division_id)
    {
        $divisions = Divisions::findOrFail($division_id);
        $sections = Sections::where('division_id', $division_id)->get();

        if ($sections->isNotEmpty()) {
            // If sections exist, go to sections page
            return $this->sections_index($division_id);
        } else {
            // Check for direct services under the division
            $services = Services::where('division_id', $division_id)
                            ->whereNull('section_id')
                            ->get();
                            
            return Inertia::render('Services', [
                'services' => $services,
                'divisions' => $divisions,
                'division_id' => (int)$division_id
            ]);
        }
    }

    

}
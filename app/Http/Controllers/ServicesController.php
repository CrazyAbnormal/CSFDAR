<?php

namespace App\Http\Controllers;

use App\Http\Resources\Services;
use Inertia\Inertia;
use App\Models\Divisions;
use App\Models\Sections;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class ServicesController extends Controller
{

    public function index(Request $request)
    {
        $division_id = $request->query('division_id');
        $section_id = $request->query('section_id');

        // If section_id is provided, show services for that section
        if ($section_id) {
            return $this->getSectionServices($section_id);
        }
        
        // If only division_id is provided, show services for that division
        if ($division_id) {
            return $this->getDivisionServices($division_id);
        }

        // If no parameters provided, redirect to divisions page
        return Redirect::route('divisions.index');
    }
    
    // Get services for a specific division (when division has no sections)
    public function getDivisionServices($division_id)
    {
        $division = Divisions::findOrFail($division_id);
        $services = Services::where('division_id', $division_id)
            ->whereNull('section_id')
            ->get();

        return Inertia::render('Services', [
            'section' => null,
            'division' => $division,
            'services' => $services
        ]);
    }

    // Get services for a specific section
    public function getSectionServices($section_id)
    {
        $section = Sections::with('division')->findOrFail($section_id);
        $services = Services::where('section_id', $section_id)->get();

        return Inertia::render('Services', [
            'section' => $section,
            'division' => $section->division,
            'services' => $services
        ]);
    }
}

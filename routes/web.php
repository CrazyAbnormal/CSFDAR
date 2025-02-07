<?php

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Middleware\CheckAdmin;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PDFController;

use App\Http\Controllers\AssignatoreesController;
use App\Http\Controllers\ShowDateCSFFormController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\DivisionController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\SurveyFormController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         // Remove login-related props since we won't need them
//         // 'canLogin' => Route::has('login'),
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Welcome');
});


Route::get('/survey-form/divisions', [SurveyFormController::class, 'divisions_index'])->name('divisions_index');
Route::get('/survey-form/services', [SurveyFormController::class, 'services_index'])->name('services_index');
Route::post('/survey-form-submission', [SurveyFormController::class, 'store'])->name('survey_store');
Route::get('/survey-form', [SurveyFormController::class, 'index'])->name('csf_form');
Route::get('/survey-form/msg', [SurveyFormController::class, 'msg_index'])->name('msg_index');
Route::get('captcha/{config?}', '\Mews\Captcha\CaptchaController@getCaptcha')->middleware('web');
// Route::post('/captcha/verify', [SurveyFormController::class, 'verifyCaptcha']);

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::middleware([CheckAdmin::class])->group(function () {
        // Route::get('/accounts', [AccountController::class, 'index'])->name('accounts');
        // Route::post('/accounts/add', [AccountController::class, 'store']);
        // Route::post('/accounts/update', [AccountController::class, 'update']);
        // Route::post('/accounts/reset-password', [AccountController::class, 'resetPassword']);   
        Route::get('/libraries', function () {
            return Inertia::render('Libraries/Services/Index');
        })->name('libraries');
        Route::get('/divisions', [DivisionController::class, 'index'])->name('divisions');
        Route::post('/divisions/add', [DivisionController::class, 'store']);
        Route::post('/divisions/update', [DivisionController::class, 'update']);
        Route::get('/sections', [SectionController::class, 'index'])->name('sections');
        Route::post('/sections/add', [SectionController::class, 'store']);
        Route::post('/sections/update', [SectionController::class, 'update']);
        Route::post('/sections/delete', [SectionController::class, 'destroy']);
        Route::post('/services', [ServicesController::class, 'index'])->name('services');
        // Route::post('/services/assign', [ServicesController::class, 'index'])->name('services.assign');
        Route::get('/services/division/{division_id}', [ServicesController::class, 'getDivisionServices'])->name('services_division');
        Route::get('/services/section/{section_id}', [ServicesController::class, 'getSectionServices'])->name('services_section');
        
        Route::get('/assignatorees', [AssignatoreesController::class, 'index'])->name('assignatorees');
        Route::post('/assignatorees/add', [AssignatoreesController::class, 'store']);
        Route::post('/assignatorees/update', [AssignatoreesController::class, 'update']);
        Route::post('/assignatorees/delete', [AssignatoreesController::class, 'destroy']);
        Route::get('/show-date-csf-form', [ShowDateCSFFormController::class, 'index'])->name('showdate');
        Route::post('/show-date-csf-form/update', [ShowDateCSFFormController::class, 'update']);
    });

    // Route::get('/password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');

    // Route::get('/dashboard', function () {
    //     return Inertia::render('Dashboard');
    // })->name('dashboard');
    // Route::get('/profile', function () {
    //     return Inertia::render('Profile/Show');
    // })->name('profile');
    // Route::get('/service_units', [ServiceUnitController::class, 'index'])->name('service_units');
    // Route::get('/service/units', [ServiceUnitController::class, 'getServiceUnits']);
    // Route::get('/service/pstos', [ServiceUnitController::class, 'getUnitPstos']);
    // Route::post('/services/add', [ServiceUnitController::class, 'store']);
    // Route::post('/services/unit/add', [ServiceUnitController::class, 'storeUnit']);
    
    // Route::get('/service_unit/unit', [ServiceUnitController::class , 'unit_index'])->name('units');
    // Route::get('/service_unit/psto', [ServiceUnitController::class , 'psto_index'])->name('psto');
    // Route::get('/service_unit/unit-psto', [ServiceUnitController::class , 'unit_psto_index'])->name('unit_psto');
    // Route::get('/service_unit/sub-unit-psto', [ServiceUnitController::class , 'sub_unit_psto_index'])->name('sub_unit_psto');
    // Route::get('/csi', [ReportController::class , 'index']);
    // Route::get('/csi/view', [ReportController::class , 'view']);
    // Route::get('/csi/all-units', [ReportController::class , 'all_units']);
   
    // Route::get('/csi/generate/all-units/monthly', [ReportController::class, 'generateAllUnitReports']);
    // Route::post('/csi/generate', [ReportController::class, 'generateReports']);

});




// Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


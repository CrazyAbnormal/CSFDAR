<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Divisions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class DivisionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //get user
        $user = Auth::user();

        $search = $request->search;

        $divisions = Divisions::all();

        $divisions = Divisions::when($search, function ($query,  $search) {
            $query->where('name', 'like', '%' . $search . '%')
                  ->orWhere('short_name', 'like', '%' . $search . '%')
                  ->orWhere('slug', 'like', '%' . $search . '%');
        })
        ->orderByDesc('created_at')
        ->paginate(10);

        return Inertia::render('Libraries/Divisions/Index')
                    ->with('Divisions', $divisions)
                    ->with('user', $user);
    }

    public function store(Request $request)
    {
        $divisions = new Divisions();
        $divisions->name = $request->name;
        $divisions->short_name = $request->short_name;
        $divisions->slug = $request->slug;
        $divisions->save();

        return Redirect::back();
       
    }

    public function update(Request $request)
    {
        $divisions = Divisions::findorFail($request->id);
        $divisions->name = $request->name;
        $divisions->short_name = $request->short_name;
        $divisions->slug = $request->slug;
        $divisions->update();

        return Redirect::back();
       
    }
}

<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Sections;
use App\Models\Divisions;
use Illuminate\Http\Request;

class SectionController extends Controller
{
    public function index(Request $request)
    {
        $divisionId = $request->query('division_id');
        $division = Divisions::findOrFail($divisionId);
        
        $sections = Sections::where('division_id', $divisionId)
            ->with(['services'])
            ->get();

        return Inertia::render('Sections/Index', [
            'sections' => $sections,
            'division' => $division
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'division_id' => 'required|exists:divisions,id',
        ]);

        Sections::create($validated);

        return redirect()->back()->with('success', 'Section created successfully');
    }

    public function update(Request $request, Sections $section)
    {
        $this->authorize('update', $section); // Add authorization

        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $section->update($validated);

        return redirect()->back()->with('success', 'Section updated successfully');
    }

    public function destroy(Sections $section)
    {
        $this->authorize('delete', $section); // Add authorization

        // Check for related services
        if ($section->services()->count() > 0) {
            return redirect()->back()->with('error', 'Cannot delete section with existing services');
        }

        $section->delete();

        return redirect()->back()->with('success', 'Section deleted successfully');
    }
}
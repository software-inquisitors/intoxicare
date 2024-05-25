<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\IntoxicationCreateRequest;
use App\Http\Requests\IntoxicationUpdateRequest;
use App\Models\Intoxication;
use \Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class IntoxicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Intoxication::paginate();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(IntoxicationCreateRequest $request)
    {
        $Intoxication = Intoxication::create($request->all());
        return response()->json(['Intoxication' => $Intoxication], Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show(Intoxication $Intoxication)
    {
        $Intoxication->load('category');
        return response()->json(['Intoxication' => $Intoxication], Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(IntoxicationUpdateRequest $request, Intoxication $Intoxication)
    {
        $Intoxication->update($request->all());
        return response()->json(['Intoxication' => $Intoxication], Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Intoxication $Intoxication)
    {
        $Intoxication->delete();
        return response()->json(null, Response::HTTP_ACCEPTED);
    }
}

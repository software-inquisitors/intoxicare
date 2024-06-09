<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\TypeIntoxicationRequest;
use App\Models\TypeIntoxication;
use \Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class TypeIntoxicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return TypeIntoxication::paginate();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TypeIntoxicationRequest $request)
    {
        $TypeIntoxication = TypeIntoxication::create($request->all());
        return response()->json(['TypeIntoxication' => $TypeIntoxication], Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show(TypeIntoxication $TypeIntoxication)
    {
        return response()->json(['TypeIntoxication' => $TypeIntoxication], Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TypeIntoxicationRequest $request, TypeIntoxication $TypeIntoxication)
    {
        $TypeIntoxication->update($request->all());
        return response()->json(['TypeIntoxication' => $TypeIntoxication], Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TypeIntoxication $TypeIntoxication)
    {
        $TypeIntoxication->delete();
        return response()->json(null, Response::HTTP_ACCEPTED);
    }
}

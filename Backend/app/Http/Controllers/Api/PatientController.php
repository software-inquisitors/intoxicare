<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use \Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return User::paginate();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserCreateRequest $request)
    {
        $User = User::create($request->all());
        return response()->json(['User' => $User], Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $User)
    {
        return response()->json(['User' => $User], Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserUpdateRequest $request, User $User)
    {
        $User->update($request->all());
        return response()->json(['User' => $User], Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $User)
    {
        $User->delete();
        return response()->json(null, Response::HTTP_ACCEPTED);
    }
}

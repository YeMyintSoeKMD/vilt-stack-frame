<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = User::latest('id')
            ->select('id', 'name', 'email', 'phone')
            ->when($request->q, function ($q) use ($request) {
                $q->where('name', 'like', "%{$request->q}%");
            });

        $users = UserResource::collection($query->paginate(10));

        return Inertia::render('Admin/User/Index', ['users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/User/Create');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required',
            'phone' => 'required',
        ]);

        DB::beginTransaction();
        try {

            $user = User::create($data);
            // $user->syncRoles($data['role']);

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            dd($e->getMessage());
        }

        return to_route('users.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {

        $user = new UserResource(User::findOrFail($id));
        // return $user;
        return Inertia::render('Admin/User/Create', ['editUser' => $user]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users,email,' . $id,
            'phone' => 'required',
        ]);

        $user = User::findOrFail($id);
        // $user->syncRoles($data['role']);

        $data['password'] = $request->password === null ? $user->password : $request->password;
        $user->update($data);
        return to_route('users.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        User::find($id)->delete();
        return back();
    }
}
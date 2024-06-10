<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class GraphController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return DB::select('SELECT t.name AS tipo_intoxicacion, COUNT(i.id) AS cantidad FROM intoxications i inner JOIN type_intoxications t ON i.type_id = t.id GROUP BY t.name;');
    }

    /**
     * Display a listing of the resource.
     */
    public function reportDate()
    {
        return DB::select("SELECT DATE_FORMAT(dateRegister, '%Y-%m') AS mes, COUNT(id) AS cantidad FROM intoxications i GROUP BY mes ORDER BY mes;");
    }
}

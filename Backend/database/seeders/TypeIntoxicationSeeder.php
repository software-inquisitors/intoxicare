<?php

namespace Database\Seeders;

use App\Models\TypeIntoxication;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TypeIntoxicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TypeIntoxication::factory(5)->create();
    }
}

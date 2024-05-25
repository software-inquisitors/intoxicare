<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('intoxications', function (Blueprint $table) {
            $table->id();
            $table->date('dateRegister');
            $table->string('symptoms');
            $table->string('severety');
            $table->string('treatment');
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('type_id');
            $table->foreign('patient_id')->references('id')->on('users');
            $table->foreign('type_id')->references('id')->on('type_intoxications');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('intoxications');
    }
};

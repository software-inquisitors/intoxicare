<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\TypeIntoxication;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Intoxication>
 */
class IntoxicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'dateRegister' => $this->faker->date(),
            'symptoms' => $this->faker->sentence(),
            'severety' => $this->faker->randomElement(['MILD', 'MODERATE', 'SEVERE', 'FATAL']),
            'treatment' => $this->faker->sentence(),
            'patient_id' => User::inRandomOrder()->first()->id,
            'type_id' => TypeIntoxication::inRandomOrder()->first()->id
        ];
    }
}

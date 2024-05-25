<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Carro>
 */
class CarroFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'serie' => $this->faker->numberBetween($min = 1, $max = 999999999),
            'model' => $this->faker->word(),
            'manufacturer' => $this->faker->randomElement(['Abarth', 'Alldays & Onions', 'Alvis', 'Arab', 'Austin Motor Company', 'BMW', 'Carbodies', 'Changan Mazda', 'Daewoo', 'Dodge', 'Ferrari', 'General Motors OBB', 'Hummer', 'Lamborghini', 'Land Rover', 'Mitsubishi', 'Mazda', 'Pagani', 'Renault', 'Zenvo']),
            'plate' => $this->faker->bothify('?##??#??#'),
            'isNew' => $this->faker->boolean(),
            'isWarranted' => $this->faker->boolean(),
            'entryDate' => $this->faker->date(),
            'purchaseDate' => $this->faker->date(),
            'category_id' => Category::inRandomOrder()->first()->id,
        ];
    }
}

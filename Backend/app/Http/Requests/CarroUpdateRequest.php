<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CarroUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'serie' => 'required|numeric',
            'model' => 'required|string',
            'manufacturer' => 'required|string',
            'plate' => 'required|string',
            'isNew' => 'required',
            'isWarranted' => 'required',
            'entryDate' => 'required',
            'purchaseDate' => 'required',
            'category_id' => 'required|numeric',
        ];
    }
}

<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\posts;



class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        
        posts::create([
            'titulo'=>'holaMundo',
            'contenido'=>'aqui comentando como anda la gente',
            'user_id'=>1,
            'likes'=>4,
        ]);
        posts::create([
            'titulo'=>'que onda',
            'contenido'=>' como anda la gente',
            'user_id'=>1,
            'likes'=>4,
        ]);
        posts::create([
            'titulo'=>'hello',
            'contenido'=>'aqui comentando ',
            'user_id'=>1,
            'likes'=>4,
        ]);
        posts::create([
            'titulo'=>'asasdasd',
            'contenido'=>'aasdasdareawe',
            'user_id'=>1,
            'likes'=>4,
        ]);
    }
}

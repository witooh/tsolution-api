<?php

class UserTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user')->truncate();

        DB::table('user')->insert(
            array(
                array(
                    'email'=>'admin',
                    'password'=>Hash::make('admin'),
//                    'role_id'=>1,
                    'name'=>'Witoo Harianto',
                    'company_name'=>null,
                    'is_admin'=>1,
                    'created_at'=>new DateTime,
                    'updated_at'=>new DateTime,
                ),
            )
        );
    }

}
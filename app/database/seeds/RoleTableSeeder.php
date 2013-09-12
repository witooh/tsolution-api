<?php

class RoleTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('role')->truncate();

        DB::table('role')->insert(
            array(
                array(
                    'name'=>'Admin',
                    'created_by'=>1,
                    'created_at'=>new DateTime,
                    'updated_at'=>new DateTime,
                ),
                array(
                    'name'=>'User',
                    'created_by'=>1,
                    'created_at'=>new DateTime,
                    'updated_at'=>new DateTime,
                ),
            )
        );
    }

}
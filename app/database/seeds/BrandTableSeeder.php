<?php

class BrandTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('brand')->truncate();

        $security = 'Security';
        $communication = 'Communication';

        DB::table('brand')->insert(
            array(
                array(
                    'name'=>'VIVOTEK',
                    'type'=>$security,
                    'created_at'=>new DateTime,
                    'updated_at'=>new DateTime,
                ),
                array(
                    'name'=>'KOUKAAM',
                    'type'=>$security,
                    'created_at'=>new DateTime,
                    'updated_at'=>new DateTime,
                ),
                array(
                    'name'=>'QNAP',
                    'type'=>$security,
                    'created_at'=>new DateTime,
                    'updated_at'=>new DateTime,
                ),
                array(
                    'name'=>'GEOVISION',
                    'type'=>$security,
                    'created_at'=>new DateTime,
                    'updated_at'=>new DateTime,
                ),

                //Communication
                array(
                    'name'=>'VOICE LOGGER (ARTECH)',
                    'type'=>$communication,
                    'created_at'=>new DateTime,
                    'updated_at'=>new DateTime,
                ),
                array(
                    'name'=>'TDS Series (Transtel)',
                    'type'=>$communication,
                    'created_at'=>new DateTime,
                    'updated_at'=>new DateTime,
                ),
                array(
                    'name'=>'Lynx PABX (Transtel)',
                    'type'=>$communication,
                    'created_at'=>new DateTime,
                    'updated_at'=>new DateTime,
                ),
                array(
                    'name'=>'Telephones Sets (Transtel)',
                    'type'=>$communication,
                    'created_at'=>new DateTime,
                    'updated_at'=>new DateTime,
                ),
                array(
                    'name'=>'VoIP (Transtel)',
                    'type'=>$communication,
                    'created_at'=>new DateTime,
                    'updated_at'=>new DateTime,
                ),
            )
        );
    }

}
<?php

class SeriesTableSeeder extends Seeder
{

    protected $series = array();

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('series')->truncate();

        $this->add('SUPREME Series', 1);
        $this->add('SMART Series', 1);
        $this->add('Fixed Series', 1);
        $this->add('P/T/Z Series', 1);
        $this->add('Dome Series', 1);
        $this->add('Available Soon', 1);
        $this->add('Recordings Software', 1);

        //KOUKAAM
        $this->add('Series', 2);

        //QNAP
        $this->add('Series', 3);

        //GEOVISION
        $this->add('DVR', 4);
        $this->add('NVR', 4);
        $this->add('CMS', 4);
        $this->add('POS/ATM', 4);
        $this->add('Mobile DVR', 4);

        //Communication
        //VOICE LOGGER (ARTECH)
        $this->add('Series', 5);

        //TDS Series (Transtel)
        $this->add('Series', 6);

        //Lynx PABX (Transtel)
        $this->add('Series', 7);

        //Telephones Sets (Transtel)
        $this->add('Series', 8);

        //VoIP (Transtel)
        $this->add('Series', 9);

        DB::table('series')->insert($this->series);
    }


    public function add ($name, $brand){
        $this->series[] = array(
            'brand_id'=>$brand,
            'name'=>$name,
            'created_at'=>new DateTime,
            'updated_at'=>new DateTime,
        );
    }
}
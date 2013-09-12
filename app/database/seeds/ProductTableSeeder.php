<?php

class ProductTableSeeder extends Seeder
{

    protected $series = array();

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product')->truncate();

        //VIVOTEK
        //SUPREME Series
        $this->add('IP8362', 1);
        $this->add('IP8352', 1);
        $this->add('IP8162P', 1);
        $this->add('IP8162', 1);
        $this->add('IP8151P', 1);
        $this->add('IP8151', 1);
        $this->add('SD8362E', 1);
        $this->add('FE8171V', 1);
        $this->add('FD8362E', 1);
        $this->add('FD8362', 1);
        $this->add('FD8162', 1);
        $this->add('MD8562', 1);
        $this->add('MD8562D', 1);

        //SMART Series
        $this->add('MD7560X', 2);

        DB::table('product')->insert($this->series);
    }


    public function add ($name, $series){
        $this->series[] = array(
            'series_id'=>$series,
            'name'=>$name,
            'created_at'=>new DateTime,
            'updated_at'=>new DateTime,
        );
    }
}
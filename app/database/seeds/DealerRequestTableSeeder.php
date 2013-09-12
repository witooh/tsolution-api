<?php

class DealerRequestTableSeeder extends Seeder
{

    protected $series = array();

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('dealer_request')->truncate();

        $this->add('test01', 'content01', 1);
        $this->add('test02', 'content02', 1);
        $this->add('test03', 'content03', 1);

        DB::table('dealer_request')->insert($this->series);
    }


    public function add ($title, $content, $created_by){
        $this->series[] = array(
            'title'=>$title,
            'content'=>$content,
            'created_by'=>$created_by,
            'created_at'=>new DateTime,
            'updated_at'=>new DateTime,
        );
    }
}
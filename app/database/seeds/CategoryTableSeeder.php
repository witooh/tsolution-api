<?php

class CategoryTableSeeder extends Seeder
{

    protected $data;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('category')->truncate();

        $this->add('News');
        $this->add('Event');
        $this->add('Knowledge');
        $this->add('FAQ');
        $this->add('Reference');
        $this->add('About Us');
        $this->add('Announce');

        DB::table('category')->insert($this->data);
    }

    public function add ($name){
        $this->data[] = array(
            'name'=>$name,
            'created_by'=>1,
            'created_at'=>new DateTime,
            'updated_at'=>new DateTime,
        );
    }

}
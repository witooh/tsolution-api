<?php

class ContentTableSeeder extends Seeder
{

    protected $data;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('content')->truncate();

        $this->add('Knowledge', 3);
        $this->add('FAQ', 4);
        $this->add('Reference', 5, '<p><img alt="" src="../../assets/files/reference/ref-1.png" style="height:2555px; width:237px" /><img alt="" src="../../assets/files/reference/ref-2.png" style="height:2555px; width:277px" /><img alt="" src="../../assets/files/reference/ref-3.png" style="height:2555px; width:277px" /><img alt="" src="../../assets/files/reference/ref-4.png" style="height:2555px; width:236px" /></p>');
        $this->add('About Us', 6);

        DB::table('content')->insert($this->data);
    }

    public function add($title, $category_id, $content=null)
    {
        $this->data[] = array(
            'title' => $title,
            'thumb' => null,
            'img' => null,
            'short'=>'short',
            'category_id' => $category_id,
            'created_by' => 1,
            'published' => true,
            'content' => $content,
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        );
    }

}
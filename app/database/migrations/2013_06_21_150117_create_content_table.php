<?php

use Illuminate\Database\Migrations\Migration;

class CreateContentTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
    public function up()
    {
        Schema::create('content',
            function ($table) {
                $table->increments('id');
                $table->integer('category_id');
                $table->integer('created_by');
                $table->string('title', 250);
                $table->text('short')->nullable();
                $table->text('thumb')->nullable();
                $table->text('img')->nullable();
                $table->text('content')->nullable();
                $table->boolean('published');
                $table->timestamps();

                $table->index('category_id');
                //$table->index('created_by');
                $table->index('title');
                //$table->foreign('category_id')->references('id')->on('cms_category');
            }
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('content');
    }

}
<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		//$this->call('RoleTableSeeder');
		$this->call('UserTableSeeder');
		$this->call('BrandTableSeeder');
		$this->call('SeriesTableSeeder');
		//$this->call('ProductTableSeeder');
		$this->call('CategoryTableSeeder');
		$this->call('ContentTableSeeder');
		//$this->call('DealerRequestTableSeeder');
	}

}
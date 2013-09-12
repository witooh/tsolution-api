<?php

namespace App;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider {

    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->repository();
    }

    public function repository(){
        $this->app->singleton('UserRepository','App\Repositories\UserRepository');
        $this->app->singleton('BrandRepository','App\Repositories\BrandRepository');
        $this->app->singleton('SeriesRepository','App\Repositories\SeriesRepository');
        $this->app->singleton('ProductRepository','App\Repositories\ProductRepository');
        $this->app->singleton('ContentRepository','App\Repositories\ContentRepository');
        $this->app->singleton('CategoryRepository','App\Repositories\CategoryRepository');
        $this->app->singleton('FileRepository','App\Repositories\FileRepository');
        $this->app->singleton('RequestRepository','App\Repositories\RequestRepository');
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return array();
    }
}
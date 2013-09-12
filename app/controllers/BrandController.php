<?php

class BrandController extends BaseController
{

    protected $brandRepository;

    public function __construct()
    {
        $this->brandRepository = App::make('BrandRepository');
    }

    public function postCreate()
    {
        $id = $this->brandRepository->create(Input::all());
        JsonResponse::success(array('id' => $id));
    }

    public function getDataprovider()
    {
        return Response::json($this->brandRepository->findGridData()->getData());
    }

    public function postDestroy()
    {
        $this->brandRepository->destroy(Input::get('id'));
        JsonResponse::success();
    }

    public function getData($id)
    {
        $data = $this->brandRepository->findById($id);
        if (empty($data)) {
            JsonResponse::notfound();
        }
        JsonResponse::success($data->toArray());
    }

    public function postUpdate($id)
    {
        $this->brandRepository->edit($id, Input::all());
        JsonResponse::success();
    }

    public function getAll(){
        $data = $this->brandRepository->findAll(array('id', 'name', 'type'));
        JsonResponse::success($data->toArray());
    }

    public function getAllbytype($type){
        $data = $this->brandRepository->findByType($type);
        JsonResponse::success($data->toArray());
    }
}
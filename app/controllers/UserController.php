<?php

class UserController extends BaseController
{

    protected $userRepository;

    public function __construct()
    {
        $this->userRepository = App::make('UserRepository');
    }

    public function postCreate()
    {
        $id = $this->userRepository->create(Input::all());
        JsonResponse::success(array('id' => $id));
    }

    public function getDataprovider()
    {
        return Response::json($this->userRepository->findGridData()->getData());
    }

    public function postDestroy()
    {
        $this->userRepository->destroy(Input::get('id'));
        JsonResponse::success();
    }

    public function getData($id)
    {
        $user = $this->userRepository->findById($id);
        if (empty($user)) {
            JsonResponse::notfound();
        }
        JsonResponse::success($user->toArray());
    }

    public function postUpdate($id)
    {
        $this->userRepository->edit($id, Input::all());
        JsonResponse::success();
    }

    public function postChangepwd($id)
    {
        $this->userRepository->edit($id, array('password'=>Input::get('new_password')));
        JsonResponse::success();
    }

    public function postResetpwd($id){
        $this->userRepository->resetPassword($id);
        JsonResponse::success();
    }
}
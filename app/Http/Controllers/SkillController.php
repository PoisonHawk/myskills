<?php

namespace App\Http\Controllers;

use App\Skill;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SkillController extends Controller
{
    public function index(){

        $ans = [
          'status' => 'success',
          'data' => [],
        ];

        $skills = Skill::getSkills();
        $ans['data'] = $skills;

        return response()->json($ans);

    }

    public function show($id){

    }

    public function store(Request $req){

        $ans = [
          'status' => 'success',
          'data' => [],
        ];

        $name = $req->input('name');
        $rate = $req->input('rate');
        $user_id = $req->input('user_id') ? $req->input('user_id') : 1;
        //todo валидация на актуальность данных

        //todo проверка на уникальное имя
        if(!Skill::checkUniqueName($name)){
            $ans = ['status' => 'fail',
                    'errorMsg' => 'fail unique name',
                ];
            return response()->json($ans);
        };

        //сохранение
        $skill = new Skill;
        $skill->name = $name;
        $skill->rate = $rate;
        $skill->user_id = $user_id;
        $skill->save();

        //ответ
        $ans['data'] = $skill;

        return response()->json($ans);

    }

    public function update(Request $req){

    }

    public function destroy(){

    }
}

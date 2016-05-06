<?php

namespace App\Http\Controllers;
use Exception;
use App\Skill;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Exceptions\Handler;
use Validator;

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
          'status' => 'fail',
          'errorMsg' => 'Server error',
        ];

        $name = $req->input('name');
        $rate = $req->input('rate') ?: 0 ;
        $user_id = $req->input('user_id') ? $req->input('user_id') : 1;

        //валидация на актуальность данных
        $this->validate($req, [
            'name' => 'required|alpha_num',
            'rate' => 'integer|max:200000000',
        ]);

        //проверка на уникальное имя
        if(!Skill::checkUniqueName($name)){
            $ans['errorMsg'] = 'Навык с таким именем уже существует';
            return response()->json($ans);
        };

        //сохранение
        $skill = new Skill;
        $skill->name = $name;
        $skill->rate = $rate;
        $skill->user_id = $user_id;
        $skill->save();

        //все хорошо
        $ans['status'] = 'success';
        $ans['skill'] = $skill;
        return response()->json($ans);

    }

    public function update(Request $req){

        $id = $req->input('id');

        $skill = Skill::find($id);

        //todo проверка на существование
        if ($skill === null) {
            $ans = ['status' => 'fail',
                    'errorMsg' => 'fail skill',
                ];
            return response()->json($ans);
        }

        $skill->rate++;
        $skill->save();

        $ans = [
            'status'=> 'success',
            'skill' => $skill,
        ];

        return response()->json($ans);
    }

    public function destroy(){

    }
}

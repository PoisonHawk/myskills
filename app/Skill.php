<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Skill extends Model
{

    public static function getSkills($id=null){

      return DB::table('skills')
        ->select('id', 'name', 'rate')
        ->orderBy('id')
        ->get();
    }

    /**
    *@todo добавить user_id;
    */
    public static function checkUniqueName($name){
        
        $skill = DB::select('select lower(name) from skills where name = :name', ['name' => strtolower($name)]);

        return count($skill) === 0;
    }

}

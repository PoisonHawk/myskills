<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Skill extends Model
{

    public static function getSkills($id=null){

      $ans = [
        'status' => 'success',
        'data' => [],
      ];

      $skills = DB::table('skills')->select('name', 'rate')->get();
      $ans['data'] = $skills;

      return json_encode($ans);

    }

}

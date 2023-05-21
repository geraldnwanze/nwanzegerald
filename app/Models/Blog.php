<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Blog extends Model
{
    use HasFactory;

    public static function booted()
    {
        static::creating(function ($blog) {
            $blog->created_by = Auth::id();
            $blog->updated_by = Auth::id();
        });

        static::updating(function ($blog) {
            $blog->updated_by = Auth::id();
        });
    }
}

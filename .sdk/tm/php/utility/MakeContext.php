<?php
declare(strict_types=1);

// FederalRegister SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FederalRegisterMakeContext
{
    public static function call(array $ctxmap, ?FederalRegisterContext $basectx): FederalRegisterContext
    {
        return new FederalRegisterContext($ctxmap, $basectx);
    }
}

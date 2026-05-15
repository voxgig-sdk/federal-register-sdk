<?php
declare(strict_types=1);

// FederalRegister SDK utility: prepare_body

class FederalRegisterPrepareBody
{
    public static function call(FederalRegisterContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}

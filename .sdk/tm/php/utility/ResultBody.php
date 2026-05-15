<?php
declare(strict_types=1);

// FederalRegister SDK utility: result_body

class FederalRegisterResultBody
{
    public static function call(FederalRegisterContext $ctx): ?FederalRegisterResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

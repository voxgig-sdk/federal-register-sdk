<?php
declare(strict_types=1);

// FederalRegister SDK utility: result_headers

class FederalRegisterResultHeaders
{
    public static function call(FederalRegisterContext $ctx): ?FederalRegisterResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

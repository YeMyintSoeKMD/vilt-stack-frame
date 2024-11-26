<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DataPackController extends Controller
{
    /**
     * Fetch data pack from vandor api
     */
    public function dataPackageList()
    {
        $body = [
            'msisdn' => 'OTk3MTM1MzU1MA==',
            'vendorid' => '12002',
            'lang' => null,
            'type' => 'ALL',
            'categoryid' => '2',
            'remarks' => 'moa',
        ];

        $headers = [
            'X-imi-reqinit' => '20242204094519867',
            'X-imi-signature' => 'A41F3D2DB342DE0AC12A47F59DD9A3CD3851DA7976E2E40287109306CCEAE53F5D56F00CA878C55E356FC5DDE1F5F03D8E3EB99D886332A6E23F087ADF17615B',
            'X-forwardip' => '10.56.29.46',
            'Authorization' => 'Basic TU9BOk1vQEEyQDI0IyM=',
        ];

        try {
            $response = Http::withHeaders($headers)->post('http://10.55.24.51:9181/api/datapacklist', $body);

            if ($response->successful()) {
                return response()->json($response->json());
            }

            /*
            return response()->json([
                'error' => 'Failed to fetch data',
                'details' => $response->body()
            ], $response->status());
            */

        } catch (\Exception $e) {
            /*
            return response()->json([
                'error' => 'An error occurred',
                'details' => $e->getMessage()
            ], 500);
            */
        }

        // Use the local JSON file for fake data
        $filePath = base_path('docs/others/dataPackList.json');
        if (file_exists($filePath)) {
            $fakeData = json_decode(file_get_contents($filePath), true);
            return response()->json($fakeData);
        }
    }
}
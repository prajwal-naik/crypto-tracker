import { fetchCryptoPrices, DEFAULT_CRYPTOS } from '../../../lib/cryptoApi';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const cryptoIdsParam = searchParams.get('ids');
    
    const cryptoIds = cryptoIdsParam ? cryptoIdsParam.split(',') : DEFAULT_CRYPTOS;
    
    const data = await fetchCryptoPrices(cryptoIds);
    
    return NextResponse.json({ 
      success: true, 
      data,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: error.message 
      },
      { status: 500 }
    );
  }
}
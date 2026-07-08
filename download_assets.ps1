$urls = @(
  'https://www.lodhagroup.com/themes/lodhanew/images/home/Lodha-90-White-Logo-02.svg',
  'https://www.lodhagroup.com/themes/lodhanew/images/svg/close.svg',
  'https://www.lodhagroup.com/themes/lodhanew/images/svg/enquire.svg',
  'https://www.lodhagroup.com/themes/lodhanew/images/svg/call.svg',
  'https://www.lodhagroup.com/themes/lodhanew/images/svg/chat.svg',
  'https://www.lodhagroup.com/themes/lodhanew/images/svg/search.svg',
  'https://www.lodhagroup.com/themes/lodhanew/images/home/Lodha-90-Grey-Logo.svg',
  'https://www.lodhagroup.com/themes/lodhanew/images/svg/IG.svg',
  'https://www.lodhagroup.com/themes/lodhanew/images/svg/YT.svg',
  'https://www.lodhagroup.com/themes/lodhanew/images/svg/LI.svg',
  'https://www.lodhagroup.com/themes/lodhanew/images/svg/arrowDown.svg',
  'https://www.lodhagroup.com/sites/default/files/projects/logo/Logo_Lodha%20Alibaug.svg',
  'https://www.lodhagroup.com/sites/default/files/2025-03/USP1_Lodha_Alibaug.png',
  'https://www.lodhagroup.com/sites/default/files/2025-03/USP1_Lodha_Alibaug_Mobile.png',
  'https://www.lodhagroup.com/sites/default/files/2025-03/USP2_Lodha_Alibaug.png',
  'https://www.lodhagroup.com/sites/default/files/2025-03/USP2_Lodha_Alibaug_Mobile.png',
  'https://www.lodhagroup.com/sites/default/files/2025-03/USP3_Lodha_Alibaug.png',
  'https://www.lodhagroup.com/sites/default/files/2025-03/USP3_Lodha_Alibaug_Mobile.png',
  'https://www.lodhagroup.com/sites/default/files/wfd/wfd-1.webp',
  'https://www.lodhagroup.com/sites/default/files/wfd/wfd-2.webp',
  'https://www.lodhagroup.com/sites/default/files/wfd/wfd-3.webp',
  'https://www.lodhagroup.com/sites/default/files/qrcode/Townhouses_RERA_QR_code.png',
  'https://www.lodhagroup.com/sites/default/files/2026-04/Web-Icons.png',
  'https://www.lodhagroup.com/sites/default/files/favicon-lodha.png'
)
$dest = 'src/assets/lodha-alibaug'
foreach ($url in $urls) {
  $fname = [System.Uri]::UnescapeDataString(($url -split '/')[-1])
  Write-Host "Downloading: $fname"
  try {
    Invoke-WebRequest -Uri $url -OutFile "$dest/$fname" -UseBasicParsing -TimeoutSec 15
    Write-Host "  OK: $fname"
  } catch {
    Write-Host "  FAILED: $fname - $_"
  }
}
Write-Host 'All downloads complete.'

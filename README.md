# Geolocation-ts-example
Example for ProxySpace GEO Location API written in Typescript

### Usage
``ts-node api-req.ts <ip>``

<br>If ``IP`` is not provided it fallbacks on your own IP.

### Example output:
```bash
OK
{
  asn_number: 502xx,
  asn_organization: 'T-Mobile Thuis BV',
  city: 'Arnhem',
  country: 'Netherlands',
  country_code: 'NL',
  ip: '94.157.xx.xx',
  latitude: 52.xxx,
  longitude: 5.xxx,
  postal_code: '68xx',
  time_zone: 'Europe/Amsterdam'
}
Speed 131.55 MS
```

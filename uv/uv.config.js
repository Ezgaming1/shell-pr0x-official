self.__uv$config = {
  // Add your exact repository name here before /uv/service/
  prefix: '/shell-pr0x-official/uv/service/', 
  bare: 'https://bare.benrogo.net/',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '/uv-shell-launcher/uv/uv.handler.js',
  client: '/uv-shell-launcher/uv/uv.client.js',
  bundle: '/uv-shell-launcher/uv/uv.bundle.js',
  config: '/uv-shell-launcher/uv/uv.config.js',
  sw: '/uv-shell-launcher/uv/uv.sw.js',
};

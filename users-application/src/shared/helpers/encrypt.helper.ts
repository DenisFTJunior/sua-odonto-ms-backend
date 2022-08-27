import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

const iv = randomBytes(16);
const password =
  'c4baf1bdf18f073485f2d19bb0bf096a1779993141ebdf5129cb8b988e44c90290507daa ';

export const encrypter = async (textForEncrypt: string) => {
  const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
  const cipher = createCipheriv('aes-256-ctr', key, iv);

  const encryptedText = Buffer.concat([
    cipher.update(textForEncrypt),
    cipher.final(),
  ]);

  return encryptedText;
};

export const decrypter = async (encryptedText: NodeJS.ArrayBufferView) => {
  const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
  const decipher = createDecipheriv('aes-256-ctr', key, iv);
  const decryptedText = Buffer.concat([
    decipher.update(encryptedText),
    decipher.final(),
  ]);

  return decryptedText;
};

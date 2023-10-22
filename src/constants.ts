export const ETERNAL_CHAT_ABI = [
  'function sendMessage(string)',
  'function getAllMessages() view returns ((string text, address from, uint256 timestamp)[])',
  'function getTotalMessages() view returns (uint256)',
  'function getAllSenders() view returns (address[])',
  'event NewMessage(address from, uint256 timestamp, string message)'
]

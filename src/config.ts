import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.Devnet) as WalletAdapterNetwork;
// const network = WalletAdapterNetwork.Devnet;
export const rpcHost =
  process.env.NEXT_PUBLIC_RPC_HOST || clusterApiUrl(network);

export const candyMachineId = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ||
    "Cuqr6zL1my6VqLDJFYpDYPxdGYdCp9GN3MrnhkCMfoG6"
);
export const defaultGuardGroup =
  process.env.NEXT_PUBLIC_DEFAULT_GUARD_GROUP || undefined; // undefined means default

// "qasJ6jhgtngKk2QnEPdDjuFH8NMoM58W8TxPBXAChPY"
// "3zwFR3spiwbSSMtvVKG2bRT6ttqFoC3MHCafGP8ZrdLz"
// "DAA8yRLu7acVs3kxaTyCjoEjNWGinLaCKVhDY29ASNua"

export const whitelistedWallets = [
  "CejSuY4VTJoMNCGUzQw7W55BBu9ahDazC6s2PKYbZ3DV",
  "2qTwXXNi7XPRHgcEjQMPywxVmyps2RWQcbKLMY5C9XvE",
  "ARhwtjysfEt53PJZpu481DxZNmdKT9gMGonbUwJfkJZe",
  "9oQ983SYnWiFXY5r6kvvD6VJvKsmcS39zVLAY43jD7Aw",
  "82aw7W1zH9VsT7dXzhH6bMPGVFiWAUWkpgx8pEgud8EL",
  "pErLXusjgZkDJT9126Mb8hp8NZxmJoGniA6WEMPpNhb",
  "CM1h4zABFNvZs5vt3SiNghHBjaf2cVbZAR6pZzXZNUT7",
  "HXNWdTkeX1wLNzxrccBBrdXf8S84LQa88b3HfH8PJA46",
  "8R1jQHRLdh9GorFkXcNam9RyJTVPMmmFuzuVZLWh3NxB",
  "5QpQNJDfCLHTWDErmWtHLv6dWs6Vq4vhDX8Lkxmv8QSb",
  "8q8PDKsqhhVCDQZAoaaXnvLV1nqQp8hM2UgBJjEKGZJm",
  "GSj7YmEbmuJHzncK5U95izL3AEFANnZVwtVHJfud6Noa",
  "ELGkKxoKyUNULGveE4j25Bfg1h3VVfeHLpWrWySHL2Rw",


  "1BWutmTvYPwDtmw9abTkS4Ssr8no61spGAvW1X6NDix",
	"DpXJe58QhPig3tXTVxjhBzP14Z3AgghKSxohQTX8uabQ",
	"HTnw6Ag9CGEddnvL56ww1LQ51YNdt5jdgvN9UBf5XmKJ",
	"5kc9aWVEYCiByi5gGf2wEFmwnpqJYJJaT66JgEvdNMzV",
	"3ydbv4pP41ESTqKR3J6GnWbJoRWauLvT9QMv7iC51oAw",
	"7io8u786EZvXn8fjGwkLNe5sdZvAopnHxUgh5qyUGu4C",
	"Ehgn5jDHokkuRC5bCzAfAdmoCYybdYjiCHU3o4uzxmSh",
	"DBpM1VfDMts4PPQT4mmNQV1L6i8p35s98sx3yBG8m45F",
	"EeMzCpvcf5tq5wVuZzJxmBNVryfntjLGbiUw75skvSyC",
	"26bSdkaGPdJb6LRjFKN44zD2bpaeTmFBLF5zHd6WMjo6",
	"CaSAW7nJChgPXc1VGLaSHDiZ41C3XgaTZjEcckRVLdkg",
	"GzVJAbr19R5hBB4JT3c3JUmnJ8UR7MtsrZD1EX2h55Nm",
	"Es5PSU1S4yekVQyMn71uvbhJWEcLcDbVbC3qDUHgisbD",
	"78KqMKzAQnee9QV3QWJXKcdK8HP7aTe6Xtpg7hmxmvr9",
	"GNzEsidcwjeqQV1TBWBrNUmWWR77QK2SMrPQTY6hGZH9",
	"3K3JsMQpFdaQV4YJoRhBEoUQwDKnFqFniyxecvnRVVzM",
	"Ce8feSwV4D3UMzDLGH1ekE25veCv2RAp6wgSb8u5bKES",
	"4s71pHWJet6cXRsp21v57FF7R4sWaXepDRaNqxCEvDDe",
	"7N5kzhSuRuEPPWxUxJ1ohiZkGpX8hwn8qbc9jC9VgfRs",
	"Gg4d9uwdHTKRT1MYrpNVXusYPcdv8369tQcJfeWyatSE",
	"CzQqcsAZJshaemHggf8J7FmhQ66Jnt5KFNCdhBaSxTNE",
	"CQUYFxWwNf1DBRpgmfgTZZhagdGbFj8xG1aw9SkVR6ap",
	"4uR5KUBbDgBG6dRwZuF47c41ETJigvpuxNBXCdiZ9JBx",
	"E3tJa4LeHEGDC7R5Y8wB9o1dq9SqJPmaoqqNjseYbCSj",
	"HQVtYUEYKQGeT9QNQHRKneS6LLD2gvwDcXyxWknxpw7v",
	"DtcAryPU6AvzCwCKWKm3Y1ehAWBuZG5XXp9TviNb3LHj",
	"8j5idXAe8wzDRJa5VipoBnpsh2ey1KEzXJRuMUhrJyoY",
	"6d1csEkvD8WM6p4fs448EKf4US86qZUf4MS5qyFFjALc",
	"CoTq7bFwddwZFVnxv6ofgxFcUicQ3VfSRDyfJBoRWyYc",
	"DzdT1hbjgPdHC2WzUn5ct3b8qWfZgeNg6iaqb5Vyh589",
	"8g2Jv94iYhgKmpqJ4TjtsWDpYcg1gnvzhwVJiFJ3tajw",
	"Gz6dRcADMgiPrKQCo3ehmH2p37VxRdUTt5XEx5eWuPHF",
	"CDcJoPhzMNAA4Qfc3vtXXYNvbPLudw7ZJ4AaJ9Hn8eFW",
	"5izXxjgeTBG7jjf1nLPThWzGR4EjnDvZRptT7wvfQqfR",
	"2voio4wuRv3891P9FFxtAtigjhwBt1u6ouLTxkffn67X",
	"JAw4xqpfZAHNMh5AMoEiKoAhbXrA3WknEGtoa6TBgWsL",
	"HX8pHtadx5Z2U2JB8iizAZwHhLSa2nKbTq16BwKVZU41",
	"SCZ8eCiYk7Dnn9ZxjaQpwBcixfG5GQWJcqKQpBuTcR1",
	"AcTeiCMs36Ecj5fRQisTQC8RTGmjoys3WYahyjDcpQsm",
	"9Bnec8mgDDzS4C2qLTAzSbhQmnXhGdqsZPDyFhG1aZe2",
	"23k2Qyicy4SFrsV8f8rthjFUfwW5FCbLQRPak59s223h",
	"5E6HS2hWvy3y4zNPc5HnT3QtiVh3cS2gEkKa45htQAN6",
	"7ciBnPdADY8TKTsGHJaapei7AQctcWZ5VBRZ3BEuokhR",
	"GK5e86xbrGdUgzVqJouBJz3GduF2qJkLXxseZuqMNEHM",
	"9psQFGJQJydNoYvxaDBPUL2qYn8uig69ufxmZVxrLwEh",
	"G9pmn4zyeAXbk44VRrwQhwW86tz5hBKFbbPHEXQovkfS",
	"25Beuwr4A6Fint6dwJW4eK2RkkpAH5WUqVqD42weNhoZ",
	"2AT8Vimh81qpZkYJFfE78Z4bcENQcfwFJURnea9VAN2o",
	"HbVypSzjrzpVFNsG8xMu2nSH2wwwFwdismLF9CN93iYt",
	"A8uobcyPjyyujiM21UagqEscb3h9gPqfxY79pUXR3LRt",
	"2sqrAjNMJqCZ6VwQtreJLn1iWqkTKr7diZDc5aHuR11p",
	"2cBADKZzRNbgBmFeoZ2WSwQVvqYz2CtQFJ2sjMe1Lir7",
	"FAPpcKY1Wq9u392qkoPvNvEidy87p25XJXd4SuSvdNFW",
	"2p5aZEhTURnBQiUChEezgMXhWnCcvDyBEE2g5Wex34zA",
	"CChp97SzjvLGCy72YvExYiT4eSqKMKKG1EzqQib3psZM",
	"5rAFjUK3KMENfscjF1fazQ3gWEiwAAu9o6EByyFHnWSB",
	"4bDwQq2KRJC97FJhxhxDqmgQAEUQZ6Riyjwo5tSX6g2F",
	"5d7bge73txJLq5zSDDcTey9VgBDbHf1NDhRhiHEZtp8v",
	"6krjs4Z3GL523XNtVzmZVuPWdLtpVxd5AdUaqXoNPRXn",
	"8aTPc99xyQQrs19Gxdj1A4pXAaiJapUtjYiun7xF8rRt",
	"6A8xoTu5nv8gCF8EFRBRwKNNZ5Xhze1joPPDrY1svAFM",
	"EmaYCkQqvZqEnc1sgqZKxvSxuQVoSjBgNPYtVxwkkp1u",
	"yaLr36515RKsWGAXjGDhR64jWK9KhTTY3VcNzcZzyue",
	"6tyw8dHpMiLdB2yRuNR8tsFKTycxxT4vMDF7gnF79g5A",
	"DZUeBrjmukBbaZCFtA2FGV9HgYszByJ18GSLX5cCGRZJ",
	"7hc5ZhknVBo83Tv8tMg11jE27SpQNQFS4bKGvs2TsQyv"
];

// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"removeOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"getPendingTransaction","outputs":[{"name":"_operationHash","type":"bytes32"},{"name":"_confirmationsNeeded","type":"uint256"},{"name":"_toAddress","type":"address"},{"name":"_transactionValue","type":"uint256"},{"name":"_data","type":"bytes"}],"type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_numOwners","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"numPendingTransactions","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_lastDay","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"resetSpentToday","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_spentToday","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"addOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_required","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_h","type":"bytes32"}],"name":"confirm","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"hasCode","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"getNextSequenceId","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"createForwarder","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newLimit","type":"uint256"}],"name":"setDailyLimit","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"execute","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"_operation","type":"bytes32"}],"name":"revoke","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"},{"name":"_expireTime","type":"uint256"},{"name":"_sequenceId","type":"uint256"},{"name":"_signature","type":"bytes"}],"name":"executeAndConfirm","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newRequired","type":"uint256"}],"name":"changeRequirement","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_operation","type":"bytes32"},{"name":"_owner","type":"address"}],"name":"hasConfirmed","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"ownerIndex","type":"uint256"}],"name":"getOwner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"name":"changeOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_dailyLimit","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_daylimit","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Revoke","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"}],"name":"OwnerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newRequirement","type":"uint256"}],"name":"RequirementChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"SingleTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"MultiTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"initiator","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"ConfirmationNeeded","type":"event"}],
    binary: "6060604052604051611a4f380380611a4f833981016040908152815160805160a0519190930180516001908101815533600160a060020a0316600381905560009081526101026020529384205592918190849084905b825181101560cc578281815181101560025760209081029091010151600160a060020a0316600282810161010081101560025701558251600282019061010290600090869085908110156002576020908102909101810151600160a060020a03168252810191909152604001600020556001016055565b506000555061010f819055620151804204610111555050505061195c806100f36000396000f3606060405236156101275760e060020a6000350463173825d9811461017957806323fbae41146101d95780632f54bf6e146102c35780634123cb6b146102eb578063432dcdb8146102f4578063523750931461031057806354fd4d501461031a5780635c52c2f514610322578063659010e71461034c5780637065cb4814610356578063746c917114610383578063797af6271461038c5780639538c4b31461039f578063a0b7967b146103b5578063a68a76cc146103f6578063b20d30a914610404578063b61d27f614610431578063b75c7dc614610454578063b945d1f614610483578063ba51a6df146104ba578063c2cf7326146104e7578063c41a360a14610525578063cbf0b0c01461054a578063f00d4b5d14610577578063f1736d86146105a9575b6105b360003411156101775760408051600160a060020a033316815234602082015281517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c929181900390910190a15b565b6105b360043560006000366040518083838082843782019150509250505060405180910390206106d3815b600061143582335b600160a060020a0381166000908152610102602052604081205481808281141561161b576000935061134d565b6105b560043560408051602081019091526000808252908190819081908180805b610104548210156108515761085d825b600061011260005060006101046000508481548110156100025760009182526020808320909101548352820192909252604001812054600160a060020a03161415806102b6575061010480546101129160009185908110156100025750507f4c0be60200faa20559308cb7b5a1bb3255c16cb1cab91f525b5ae7a03d02fabe84015481526020810191909152604001600090812060029081015460018116156101000260001901160414155b156115af575060016102e6565b61064c6004355b600160a060020a03811660009081526101026020526040812054115b919050565b61066060015481565b610660600080805b6101045481101561093f576109488161020a565b6106606101115481565b610660600281565b6105b360003660405180838380828437820191505092505050604051809103902061095c816101a4565b6106606101105481565b6105b360043560003660405180838380828437820191505092505050604051809103902061096b816101a4565b61066060005481565b61064c6004355b600081610a34816101a4565b61064c6004355b6000813b908111905b50919050565b610660600080805b600a811015610c95578161010582600a81101561000257015411156103ee5761010581600a81101561000257015491505b6001016103bd565b6106726000610ca0336102ca565b6105b3600435600036604051808383808284378201915050925050506040518091039020610cdc816101a4565b6106606004803590602480359160443591820191013560006000610ce8336102ca565b6105b3600435600160a060020a03331660009081526101026020526040812054908082811415610f6b57610fea565b61066060048035906024803591604435808301929082013591606435916084359160a43591820191013560006000610ff0336102ca565b6105b36004356000366040518083838082843782019150509250505060405180910390206112df816101a4565b61064c600435602435600082815261010360209081526040808320600160a060020a038516845261010290925282205482818114156113385761134d565b61067260043560006002600183016101008110156100025750505060038101546102e6565b6105b3600435600036604051808383808284378201915050925050506040518091039020611356816101a4565b6105b36004356024356000600036604051808383808284378201915050925050506040518091039020611367816101a4565b61066061010f5481565b005b604051808660001916815260200185815260200184600160a060020a03168152602001838152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561063a5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b604080519115158252519081900360200190f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b5060408051600160a060020a038516815290517f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da9181900360200190a15b505b5050565b156106cd57600160a060020a03831660009081526101026020526040812054925082141561070157506106cf565b600160016000505403600060005054111561071c57506106cf565b600060028361010081101561000257508301819055600160a060020a038416815261010260205260408120556107d35b6101045460005b8181101561143c576101048054610112916000918490811015610002576000918252602080832090910154835282019290925260400181208054600160a060020a0319168155600181810183905560028281018054858255939493909281161561010002600019011604601f8190106114b457505b505050600101610753565b61068f5b600060015b600154811015610c91575b600154811080156108075750600281610100811015610002570154600014155b156114d2576001016107e7565b820191906000526020600020905b81548152906001019060200180831161082257829003601f168201915b50505050509050975097509750975097505b50505091939590929450565b15610934578289141561092d5761010480548390811015610002575050507f4c0be60200faa20559308cb7b5a1bb3255c16cb1cab91f525b5ae7a03d02fabe81015460008181526101036020908152604080832054610112835292819020805460028281018054855160019586015495821615610100026000190190911692909204601f8101879004870283018701909552848252879695600160a060020a039390931694909283919083018282801561083f5780601f106108145761010080835404028352916020019161083f565b6001909201915b6001909101906101fa565b8192505b505090565b15610954576001909101905b6001016102fc565b15610968576000610110555b50565b156106cf57610979826102ca565b156109845750610968565b61098c61074c565b60015460fa90106109a15761099f6107d7565b505b60015460fa90106109b25750610968565b60018054810190819055600160a060020a038316906002906101008110156100025790900160005055600154600160a060020a03831660008181526101026020908152604091829020939093558051918252517f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3929181900390910190a15050565b156103af5760008381526101126020526040812054600160a060020a031614610ab557604060008190208054600182810154935160029384018054600160a060020a03949094169594909391928392859291811615610100026000190116048015610aea5780601f10610abf57610100808354040283529160200191610aea565b60009150506102e6565b820191906000526020600020905b815481529060010190602001808311610acd57829003601f168201915b505091505060006040518083038185876185025a03f1925050501515610b0f57610002565b6000838152610112602090815260409182902080546001828101548551600160a060020a033381811683529682018b9052968101829052929095166060830181905260a06080840181815260029586018054948516156101000260001901909416959095049084018190527fe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a968a9590949293929160c083019084908015610bf85780601f10610bcd57610100808354040283529160200191610bf8565b820191906000526020600020905b815481529060010190602001808311610bdb57829003601f168201915b5050965050505050505060405180910390a16000838152610112602052604081208054600160a060020a0319168155600181810183905560028281018054858255939493909281161561010002600019011604601f819010610c6357505b50505060019150506102e6565b601f016020900490600052602060002090810190610c5691905b80821115610c915760008155600101610c7d565b5090565b816001019250610943565b15610cd95760405160b4806118a8833901809050604051809103906000f09050610cd9565b156102e657610111546115b75b6201518042045b90565b156106cf575061010f55565b15610d7c57610d85856000610cc5336102ca565b7f92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd00433868887876040518086600160a060020a0316815260200185815260200184600160a060020a031681526020018060200182810382528484828181526020019250808284378201915050965050505050505060405180910390a1600091505b50949350505050565b8015610d915750600083145b8015610da35750610da1866103a6565b155b15610dd357604051600160a060020a03871690600090879082818181858883f193505050501515610cfc57610002565b60003643604051808484808284378201915050828152602001935050505060405180910390209050610e0481610393565b158015610e27575060008181526101126020526040812054600160a060020a0316145b15610f335760008181526101126020908152604082208054600160a060020a0319168917815560018181018990556002918201805481865294849020909491821615610100026000190190911691909104601f908101929092048101918691908890839010610f3b57828001813560ff19161785555b50610ea9929150610c7d565b50507f1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf32813387898888604051808760001916815260200186600160a060020a0316815260200185815260200184600160a060020a03168152602001806020018281038252848482818152602001925080828437820191505097505050505050505060405180910390a15b809150610d7c565b82800160010185558215610e9d579182015b82811115610e9d578235826000505591602001919060010190610f4d565b50506000828152610103602052604081206001810154600284900a929083161115610fea5780546001828101805492909101835590839003905560408051600160a060020a03331681526020810186905281517fc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b929181900390910190a15b50505050565b1561108e574286101561109b57610002565b7fe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a33828b8d8c8c6040518087600160a060020a031681526020018660001916815260200185815260200184600160a060020a03168152602001806020018281038252848482818152602001925080828437820191505097505050505050505060405180910390a1600091505b5098975050505050505050565b8989898989896040518087600160a060020a03166c01000000000000000000000000028152601401868152602001858580828437820191505083815260200182815260200196505050505050506040518091039020905061115c818686868080601f016020809104026020016040519081016040528093929190818152602001838380828437505050505050600061160484848460008080808080805b600a8510156117ac578861010586600a81101561000257015414156117c757610002565b156111a15789600160a060020a03168989896040518083838082843782019150509250505060006040518083038185876185025a03f192505050151561100257610002565b60008181526101126020908152604082208054600160a060020a0319168d17815560018181018d90556002918201805481865294849020909491821615610100026000190190911691909104601f908101929092048101918a91908c9083901061121e5782800160ff198235161785555b5061124e929150610c7d565b82800160010185558215611212579182015b82811115611212578235826000505591602001919060010190611230565b50507f1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf3281338b8d8c8c604051808760001916815260200186600160a060020a0316815260200185815260200184600160a060020a03168152602001806020018281038252848482818152602001925080828437820191505097505050505050505060405180910390a180915061108e565b156106cf576001548211156112f45750610968565b600082905561130161074c565b6040805183815290517facbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da9181900360200190a15050565b506001820154600282900a9081166000141593505b50505092915050565b156106cf5781600160a060020a0316ff5b15610fea57611375836102ca565b1561138057506106cd565b600160a060020a0384166000908152610102602052604081205492508214156113a957506106cd565b6113b161074c565b600160a060020a03831660028361010081101561000257508301819055600160a060020a03851660008181526101026020908152604080832083905584835291829020869055815192835282019290925281517fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c929181900390910190a150505050565b90506102e6565b6106cf6101045460005b818110156117705761010480548290811015610002576000918252602082200154146114ac576101048054610103916000918490811015610002576020600081812093815292909101548352820192909252604001812081815560018101829055600201555b600101611446565b601f0160209004906000526020600020908101906107c89190610c7d565b5b600180541180156114f557506001546002906101008110156100025701546000145b1561150957600180546000190190556114d3565b6001548110801561152c5750600154600290610100811015610002570154600014155b801561154657506002816101008110156100025701546000145b156115aa57600154600290610100811015610002570154600282610100811015610002570155806101026000600283610100811015610002570154815260208101919091526040016000908120919091556001546002906101008110156100025701555b6107dc565b5060006102e6565b11156115d0576000610110556115cb610cd2565b610111555b61011054808301108015906115ee57506101105461010f5490830111155b156115af575061011080548201905560016102e6565b806116135750611613846101a4565b949350505050565b6000868152610103602052604081208054909350141561169657600080548355600183810191909155610104805491820180825582801582901161167057600083815260209020611670918101908301610c7d565b505050600283018190556101048054889290811015610002576000918252602090912001555b506001810154600283900a908116600014156117675760408051600160a060020a03871681526020810188905281517fe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda929181900390910190a1815460019011611754576000868152610103602052610104805460409092206002015490918110156100025760009182526020808320909101829055878252610103905260408120818155600181810183905560029190910191909155935061134d565b8154600019018255600182018054821790555b6000935061134d565b61010480546000808355919091526106cd907f4c0be60200faa20559308cb7b5a1bb3255c16cb1cab91f525b5ae7a03d02fabe90810190610c7d565b61010586600a8110156100025701548910156117fd57610002565b61010586600a81101561000257015461010586600a81101561000257015410156117f15784955085505b60019490940193611138565b8861010587600a8110156100025750870155875160411461181d57610002565b6020880151604089015160418a0151919550935060ff169150601b82101561184657601b909101905b604080518b815260ff841660208281019190915281830187905260608201869052915160019260808381019391929182900301816000866161da5a03f11561000257505060405151905061189a8a826101ac565b9a995050505050505050505056606060405260008054600160a060020a0319163317905560928060226000396000f36060604052361560275760e060020a60003504636b9f96ea8114604e578063ca325469146075575b608660008054604051600160a060020a039091169190349082818181858883f15050505050565b60008054608691600160a060020a0391821691301631606082818181858883f15050505050565b6088600054600160a060020a031681565b005b6060908152602090f3",
    unlinked_binary: "6060604052604051611a4f380380611a4f833981016040908152815160805160a0519190930180516001908101815533600160a060020a0316600381905560009081526101026020529384205592918190849084905b825181101560cc578281815181101560025760209081029091010151600160a060020a0316600282810161010081101560025701558251600282019061010290600090869085908110156002576020908102909101810151600160a060020a03168252810191909152604001600020556001016055565b506000555061010f819055620151804204610111555050505061195c806100f36000396000f3606060405236156101275760e060020a6000350463173825d9811461017957806323fbae41146101d95780632f54bf6e146102c35780634123cb6b146102eb578063432dcdb8146102f4578063523750931461031057806354fd4d501461031a5780635c52c2f514610322578063659010e71461034c5780637065cb4814610356578063746c917114610383578063797af6271461038c5780639538c4b31461039f578063a0b7967b146103b5578063a68a76cc146103f6578063b20d30a914610404578063b61d27f614610431578063b75c7dc614610454578063b945d1f614610483578063ba51a6df146104ba578063c2cf7326146104e7578063c41a360a14610525578063cbf0b0c01461054a578063f00d4b5d14610577578063f1736d86146105a9575b6105b360003411156101775760408051600160a060020a033316815234602082015281517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c929181900390910190a15b565b6105b360043560006000366040518083838082843782019150509250505060405180910390206106d3815b600061143582335b600160a060020a0381166000908152610102602052604081205481808281141561161b576000935061134d565b6105b560043560408051602081019091526000808252908190819081908180805b610104548210156108515761085d825b600061011260005060006101046000508481548110156100025760009182526020808320909101548352820192909252604001812054600160a060020a03161415806102b6575061010480546101129160009185908110156100025750507f4c0be60200faa20559308cb7b5a1bb3255c16cb1cab91f525b5ae7a03d02fabe84015481526020810191909152604001600090812060029081015460018116156101000260001901160414155b156115af575060016102e6565b61064c6004355b600160a060020a03811660009081526101026020526040812054115b919050565b61066060015481565b610660600080805b6101045481101561093f576109488161020a565b6106606101115481565b610660600281565b6105b360003660405180838380828437820191505092505050604051809103902061095c816101a4565b6106606101105481565b6105b360043560003660405180838380828437820191505092505050604051809103902061096b816101a4565b61066060005481565b61064c6004355b600081610a34816101a4565b61064c6004355b6000813b908111905b50919050565b610660600080805b600a811015610c95578161010582600a81101561000257015411156103ee5761010581600a81101561000257015491505b6001016103bd565b6106726000610ca0336102ca565b6105b3600435600036604051808383808284378201915050925050506040518091039020610cdc816101a4565b6106606004803590602480359160443591820191013560006000610ce8336102ca565b6105b3600435600160a060020a03331660009081526101026020526040812054908082811415610f6b57610fea565b61066060048035906024803591604435808301929082013591606435916084359160a43591820191013560006000610ff0336102ca565b6105b36004356000366040518083838082843782019150509250505060405180910390206112df816101a4565b61064c600435602435600082815261010360209081526040808320600160a060020a038516845261010290925282205482818114156113385761134d565b61067260043560006002600183016101008110156100025750505060038101546102e6565b6105b3600435600036604051808383808284378201915050925050506040518091039020611356816101a4565b6105b36004356024356000600036604051808383808284378201915050925050506040518091039020611367816101a4565b61066061010f5481565b005b604051808660001916815260200185815260200184600160a060020a03168152602001838152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561063a5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b604080519115158252519081900360200190f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b5060408051600160a060020a038516815290517f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da9181900360200190a15b505b5050565b156106cd57600160a060020a03831660009081526101026020526040812054925082141561070157506106cf565b600160016000505403600060005054111561071c57506106cf565b600060028361010081101561000257508301819055600160a060020a038416815261010260205260408120556107d35b6101045460005b8181101561143c576101048054610112916000918490811015610002576000918252602080832090910154835282019290925260400181208054600160a060020a0319168155600181810183905560028281018054858255939493909281161561010002600019011604601f8190106114b457505b505050600101610753565b61068f5b600060015b600154811015610c91575b600154811080156108075750600281610100811015610002570154600014155b156114d2576001016107e7565b820191906000526020600020905b81548152906001019060200180831161082257829003601f168201915b50505050509050975097509750975097505b50505091939590929450565b15610934578289141561092d5761010480548390811015610002575050507f4c0be60200faa20559308cb7b5a1bb3255c16cb1cab91f525b5ae7a03d02fabe81015460008181526101036020908152604080832054610112835292819020805460028281018054855160019586015495821615610100026000190190911692909204601f8101879004870283018701909552848252879695600160a060020a039390931694909283919083018282801561083f5780601f106108145761010080835404028352916020019161083f565b6001909201915b6001909101906101fa565b8192505b505090565b15610954576001909101905b6001016102fc565b15610968576000610110555b50565b156106cf57610979826102ca565b156109845750610968565b61098c61074c565b60015460fa90106109a15761099f6107d7565b505b60015460fa90106109b25750610968565b60018054810190819055600160a060020a038316906002906101008110156100025790900160005055600154600160a060020a03831660008181526101026020908152604091829020939093558051918252517f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3929181900390910190a15050565b156103af5760008381526101126020526040812054600160a060020a031614610ab557604060008190208054600182810154935160029384018054600160a060020a03949094169594909391928392859291811615610100026000190116048015610aea5780601f10610abf57610100808354040283529160200191610aea565b60009150506102e6565b820191906000526020600020905b815481529060010190602001808311610acd57829003601f168201915b505091505060006040518083038185876185025a03f1925050501515610b0f57610002565b6000838152610112602090815260409182902080546001828101548551600160a060020a033381811683529682018b9052968101829052929095166060830181905260a06080840181815260029586018054948516156101000260001901909416959095049084018190527fe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a968a9590949293929160c083019084908015610bf85780601f10610bcd57610100808354040283529160200191610bf8565b820191906000526020600020905b815481529060010190602001808311610bdb57829003601f168201915b5050965050505050505060405180910390a16000838152610112602052604081208054600160a060020a0319168155600181810183905560028281018054858255939493909281161561010002600019011604601f819010610c6357505b50505060019150506102e6565b601f016020900490600052602060002090810190610c5691905b80821115610c915760008155600101610c7d565b5090565b816001019250610943565b15610cd95760405160b4806118a8833901809050604051809103906000f09050610cd9565b156102e657610111546115b75b6201518042045b90565b156106cf575061010f55565b15610d7c57610d85856000610cc5336102ca565b7f92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd00433868887876040518086600160a060020a0316815260200185815260200184600160a060020a031681526020018060200182810382528484828181526020019250808284378201915050965050505050505060405180910390a1600091505b50949350505050565b8015610d915750600083145b8015610da35750610da1866103a6565b155b15610dd357604051600160a060020a03871690600090879082818181858883f193505050501515610cfc57610002565b60003643604051808484808284378201915050828152602001935050505060405180910390209050610e0481610393565b158015610e27575060008181526101126020526040812054600160a060020a0316145b15610f335760008181526101126020908152604082208054600160a060020a0319168917815560018181018990556002918201805481865294849020909491821615610100026000190190911691909104601f908101929092048101918691908890839010610f3b57828001813560ff19161785555b50610ea9929150610c7d565b50507f1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf32813387898888604051808760001916815260200186600160a060020a0316815260200185815260200184600160a060020a03168152602001806020018281038252848482818152602001925080828437820191505097505050505050505060405180910390a15b809150610d7c565b82800160010185558215610e9d579182015b82811115610e9d578235826000505591602001919060010190610f4d565b50506000828152610103602052604081206001810154600284900a929083161115610fea5780546001828101805492909101835590839003905560408051600160a060020a03331681526020810186905281517fc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b929181900390910190a15b50505050565b1561108e574286101561109b57610002565b7fe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a33828b8d8c8c6040518087600160a060020a031681526020018660001916815260200185815260200184600160a060020a03168152602001806020018281038252848482818152602001925080828437820191505097505050505050505060405180910390a1600091505b5098975050505050505050565b8989898989896040518087600160a060020a03166c01000000000000000000000000028152601401868152602001858580828437820191505083815260200182815260200196505050505050506040518091039020905061115c818686868080601f016020809104026020016040519081016040528093929190818152602001838380828437505050505050600061160484848460008080808080805b600a8510156117ac578861010586600a81101561000257015414156117c757610002565b156111a15789600160a060020a03168989896040518083838082843782019150509250505060006040518083038185876185025a03f192505050151561100257610002565b60008181526101126020908152604082208054600160a060020a0319168d17815560018181018d90556002918201805481865294849020909491821615610100026000190190911691909104601f908101929092048101918a91908c9083901061121e5782800160ff198235161785555b5061124e929150610c7d565b82800160010185558215611212579182015b82811115611212578235826000505591602001919060010190611230565b50507f1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf3281338b8d8c8c604051808760001916815260200186600160a060020a0316815260200185815260200184600160a060020a03168152602001806020018281038252848482818152602001925080828437820191505097505050505050505060405180910390a180915061108e565b156106cf576001548211156112f45750610968565b600082905561130161074c565b6040805183815290517facbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da9181900360200190a15050565b506001820154600282900a9081166000141593505b50505092915050565b156106cf5781600160a060020a0316ff5b15610fea57611375836102ca565b1561138057506106cd565b600160a060020a0384166000908152610102602052604081205492508214156113a957506106cd565b6113b161074c565b600160a060020a03831660028361010081101561000257508301819055600160a060020a03851660008181526101026020908152604080832083905584835291829020869055815192835282019290925281517fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c929181900390910190a150505050565b90506102e6565b6106cf6101045460005b818110156117705761010480548290811015610002576000918252602082200154146114ac576101048054610103916000918490811015610002576020600081812093815292909101548352820192909252604001812081815560018101829055600201555b600101611446565b601f0160209004906000526020600020908101906107c89190610c7d565b5b600180541180156114f557506001546002906101008110156100025701546000145b1561150957600180546000190190556114d3565b6001548110801561152c5750600154600290610100811015610002570154600014155b801561154657506002816101008110156100025701546000145b156115aa57600154600290610100811015610002570154600282610100811015610002570155806101026000600283610100811015610002570154815260208101919091526040016000908120919091556001546002906101008110156100025701555b6107dc565b5060006102e6565b11156115d0576000610110556115cb610cd2565b610111555b61011054808301108015906115ee57506101105461010f5490830111155b156115af575061011080548201905560016102e6565b806116135750611613846101a4565b949350505050565b6000868152610103602052604081208054909350141561169657600080548355600183810191909155610104805491820180825582801582901161167057600083815260209020611670918101908301610c7d565b505050600283018190556101048054889290811015610002576000918252602090912001555b506001810154600283900a908116600014156117675760408051600160a060020a03871681526020810188905281517fe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda929181900390910190a1815460019011611754576000868152610103602052610104805460409092206002015490918110156100025760009182526020808320909101829055878252610103905260408120818155600181810183905560029190910191909155935061134d565b8154600019018255600182018054821790555b6000935061134d565b61010480546000808355919091526106cd907f4c0be60200faa20559308cb7b5a1bb3255c16cb1cab91f525b5ae7a03d02fabe90810190610c7d565b61010586600a8110156100025701548910156117fd57610002565b61010586600a81101561000257015461010586600a81101561000257015410156117f15784955085505b60019490940193611138565b8861010587600a8110156100025750870155875160411461181d57610002565b6020880151604089015160418a0151919550935060ff169150601b82101561184657601b909101905b604080518b815260ff841660208281019190915281830187905260608201869052915160019260808381019391929182900301816000866161da5a03f11561000257505060405151905061189a8a826101ac565b9a995050505050505050505056606060405260008054600160a060020a0319163317905560928060226000396000f36060604052361560275760e060020a60003504636b9f96ea8114604e578063ca325469146075575b608660008054604051600160a060020a039091169190349082818181858883f15050505050565b60008054608691600160a060020a0391821691301631606082818181858883f15050505050565b6088600054600160a060020a031681565b005b6060908152602090f3",
    address: "0xe8255d001c630f35bb5c1dbd78db448cfe05cd12",
    generated_with: "2.0.9",
    contract_name: "Wallet"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Wallet error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Wallet error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Wallet error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Wallet error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Wallet = Contract;
  }

})();
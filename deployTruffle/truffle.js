module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        devnet: {
            host: '127.0.0.1',
            port: 8545,
            network_id: '*'
        },
        ganache: {
            host: '127.0.0.1',
            port: 7545,
            network_id: '*'
        },
	rinkeby: {
	    host: '127.0.0.1',
	    port: 8545,
	    network_id: 4
	}
    }
};

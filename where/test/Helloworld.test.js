const Helloworld = artifacts.require('./Helloworld.sol')
require('chai')
.use(require('chai-as-promised'))
.should()
contract('Helloworld',()=>{
	let helloworld

	before(async () =>{
		helloworld = await Helloworld.deployed()
	})

	describe('deployment',async ()=>{
		it('deployes successfully',async ()=>{
			const address = await helloworld.address
			assert.notEqual(address,0x0)
			assert.notEqual(address,'')
			assert.notEqual(address,null)
			assert.notEqual(address,undefined)
		})

		it('has a name',async ()=>{
			const name = await helloworld.getGreeting()
			assert.equal(name,'Hello World')
		})
	})
})
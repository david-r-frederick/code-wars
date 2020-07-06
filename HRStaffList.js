class StaffList {
    constructor(){
        this.collection = [];
    }

    add(name, age){
        if(age <= 20){
            throw new Error('Staff member age must be greater than 20');
        }
        if(!this.collection.includes(name)){
            this.collection.push(name);
        }
    }

    remove(name){
        if(this.collection.includes(name)){
            const indexOfName = this.collection.indexOf(name);
            this.collection.splice(indexOfName, 1);
            return true;
        } else {
            return false;
        }
    }

    getSize(){
        return this.collection.length;
    }
}
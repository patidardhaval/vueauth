<template>
    <div class="login">
        <div class="container">
            <div class="d-flex justify-content-center h-100">
                <div class="user_card">
                    <div class="d-flex justify-content-center">
                        <form v-on:submit.prevent="login">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="email" v-model="email" class="form-control input_user" value="" placeholder="email" required>
                            </div>
                            <div class="input-group mb-2">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="password" v-model="password" class="form-control input_pass" value="" placeholder="password" required>
                            </div>
                            <div class="input-group mb-2">
                                <button :disabled="submitted" type="submit" name="button" class="btn login_btn">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        console.log(process.env.VUE_APP_BASEURL)
    },
    data() {
        return {
            email: "",
            password: "",
            submitted: false
        }
    },
    methods: {
        login: function() {
            let email = this.email
            let password = this.password
            this.submitted = true;
            this.$store.dispatch('login', { email, password })
                .then((data) => {
                    this.submitted = false;
                  
                    if(data.data.success==true){
                        this.$toasted.show(data.data.message)
                        this.$router.go('/about')
                    }else{
                        this.$toasted.error(data.data.message)
                        //console.log(data);
                    }
                    
                })
                .catch(err => console.log(err))
                
        }
    }
}

</script>

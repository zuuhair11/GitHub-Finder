class Github {
    constructor() {
        this.client_id     = 'cb9885b04c12e130f582';
        this.client_secret = 'cc1ca3ad1cdf54166ac8a0f4c361233d82e886d1';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';

    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const reposData = await reposResponse.json();

        return {
            profile: profileData,
            repos: reposData
        }
        
    }

}
<template>
	<div class="content">
		<section class="space-top">
			<section v-if="User">
				<button class="btn-inverted right" @click="showEdit">Edit Profile</button>
				<h2>{{ User.username }}</h2>
				<p>Joined: <strong>{{ User.created_at }}</strong></p>
				<hr>
			</section>
			<div v-if="isSteamAuth">
				<div v-if="SteamProfile == null">
					<LoadingAnimation />
				</div>
				<div v-else>
					<section>
						<div class="vignet-box">
							<div class="grid" >
								<div class="grid1">
									<img class="avatar" v-bind:src="SteamProfile.avatar.large" alt="">
								</div>
								<div class="grid2">
									<h2>{{ SteamProfile.username }}</h2>
									<a class="simple-link link" :href="SteamProfile.page" target="_blank">View Steam Profile ↗</a>
									<hr>
									<div class="description">
										<div>Joined Steam: <strong>{{ SteamProfile.created_at.date }}</strong> ({{ SteamProfile.created_at.duration }})</div>
										<div>Status: <strong>{{ SteamProfile.status.text }}</strong> <span class="dot" :class="StatusColor"></span></div>
										<div>Last Offline: <strong>{{ SteamProfile.last_online }}</strong></div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<div v-if="RecentlyPlayed" class="vignet-box">
							<h2>Recent Activty</h2>
							<hr>
							<div class="description space">
								<div>Playtime for the past two weeks: <strong>{{ RecentlyPlayed.playtime.total }} Hours</strong></div>
								<div>Recent favorite: <strong>{{ CurrentFavorite.name }}</strong> ({{ CurrentFavorite.playtime.recent.text }})</div>
							</div>
							<h3>Recently Played Titles</h3>
							<div class="portrait-carousel">
								<ul>
									<li v-bind:key="game.appid" v-for="game in RecentlyPlayed.games">
										<GameBannerItemListing v-bind:game="game" />
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div v-else>
				<section>
					<div class="vignet-box">
						<p>It looks like you haven't connected your <strong>Steam Profile</strong> to your account yet.</p>
						<router-link class="btn-special btn-right" to="auth/steam">Link Steam</router-link>
					</div>
				</section>
			</div>
		</section>
		<section v-if="SteamProfile">
			<div class="vignet-box" :class="{ 'disabled' : this.submittedRemove }">
				<p>Remove your linked Steam account from KeepUp, you can always add your account back.</p>
				<button @click="removeSteam" class="btn-right btn-danger space">Unlink Steam</button>
			</div>
		</section>
		<section>
			<div class="vignet-box" :class="{ 'disabled' : this.submittedDelete }">
				<p>Deleting your KeepUp account is <strong>permanent</strong> and cannot be reversed.</p>
				<button @click="deleteAccount" class="btn-right btn-danger space">Delete Account</button>
			</div>
		</section>
	</div>
</template>

<script>

import GameBannerItemListing from '@/components/GameBannerItemListing.vue';
import LoadingAnimation from '@/components/LoadingAnimation.vue';

export default {

	name: 'Account',
	components: {
		GameBannerItemListing,
		LoadingAnimation
	},

	data() {
		return {
            submittedDelete: false,
            submittedRemove: false,
		}
	},

	computed: {
		User: function() { return this.$store.getters.User },
		SteamProfile: function() { return this.$store.getters.SteamProfile },
		isSteamAuth: function() { return this.$store.getters.isSteamAuthenticated },
		RecentlyPlayed: function() { return this.$store.getters.RecentlyPlayed },
		CurrentFavorite: function() { 
			var games = this.$store.getters.RecentlyPlayed.games;
			var game = games[0];
			for(var i = 1; i < games.length; i++)
				if (games[i].playtime.recent.total > game.playtime.recent.total)
					game = games[i];
			return game;
		},
		StatusColor: function () {
			let code = this.$store.getters.SteamProfile.status.code;
			switch(code) {
				case 0: return              'red';
				case 1: return              'green';
				case 2 || 3 || 4: return    'orange';
				case 5 || 6: return         'blue';
				default: return             'white';
			}
		}
	},

	created() {
		this.$store.commit('SET_STEAM_PROFILE', null);
		this.$store.commit('SET_RECENT_GAMES', null);
	},

	mounted() {
		let steamid = this.$store.getters.User.steamid;
		if (steamid) {
			this.$store.dispatch('STEAM_PROFILE', steamid);
			this.$store.dispatch('RECENT_GAMES', steamid);
		}
	},

	methods: {
		showEdit: function() { this.$store.dispatch('TOGGLE_EDIT_FORM', true) },
		removeSteam: function() {
			this.submittedRemove = true;
			this.$store.dispatch('UPDATE', { steamid: null });
			this.submittedRemove = false;
		},
		deleteAccount: function() {
			if (confirm("Are you sure you want to delete your account?")) {
				this.submittedDelete = true;
				setTimeout(() => {
					this.$store.dispatch('DELETE');
					this.$store.dispatch('LOGOUT');
					this.$router.push('/auth/login');
				}, 1000);
			}
		},
	}
}

</script>

<style lang="scss" scoped>

    @import '@/assets/style/variables.scss';

	.avatar {
		top: 0;
		width: 150px;
		height: 150px;
		border-radius: 5px;
	}

	.btn-right {
		position: absolute;
		right: 20px;
	}

	.grid {
		display: grid;
		grid-template-areas: 'avatar description';
		grid-template-columns: 150px auto;
		grid-gap: 30px;
	}

	.grid1 {
		grid-area: avatar;
		width: 150px;
	}

	.grid2 {
		grid-area: description
	}

	.grid2 > div {
		margin: 10px 0;
	}

	.description > div {
		margin: 10px 0;
	} 

	.dot {
		position: relative;
		top: -50%;
		height: 7.5px;
		width: 7.5px;
		border-radius: 50%;
		display: inline-block;
		margin-left: 5px;
		margin-bottom: 2px;
	}

	.red {
		background: red;
	}

	.green {
		background: greenyellow;
	}

	.blue {
		background: blue;
	}

	.orange {
		background: orangered;
	}

	.white {
		background: white;
	}

</style>
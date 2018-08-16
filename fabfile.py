from fabric.api import run, sudo, env, hosts


server_ip = '185.22.64.49'


@hosts([server_ip])
def prod():
    env.hosts = [server_ip]
    env.branch = 'master'
    env.app_path = '/home/guido/unilever-components'
    env.user = 'guido'
    env.password = 'guido'


def git_stash():
    run('cd %s; git checkout %s; git stash' % (env.app_path, env.branch))


def git_pull():
    run('cd %s; git checkout %s; git pull' % (env.app_path, env.branch))


def generate_dist():
    run('cd %s; npm install' % env.app_path)
    run('cd %s; npm run build' % env.app_path)


def deploy():
    git_stash()
    git_pull()
    generate_dist()
